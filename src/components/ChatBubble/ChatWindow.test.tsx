import { act, fireEvent, render, screen } from '@testing-library/react';
import { CHAT_GREETING, resolveAnswer } from '@/data/chat';
import ChatWindow from './ChatWindow';

vi.mock('@/data/chat', () => ({
  CHAT_GREETING: {
    id: 'greeting',
    role: 'bot',
    text: 'Olá! Como posso ajudar?',
  },
  CHAT_SHORTCUTS: [{ id: 'sobre', label: 'Sobre a Malu' }],
  resolveAnswer: vi.fn(() => ({
    role: 'bot',
    text: 'Esta é uma resposta de teste.',
  })),
}));

vi.mock('./ChatMessageItem', () => ({
  default: ({ message }: { message: { text: string } }) => (
    <div>{message.text}</div>
  ),
}));

vi.mock('./ChatShortcuts', () => ({
  default: ({
    onSelect,
    disabled,
  }: {
    onSelect: (id: string, label: string) => void;
    disabled?: boolean;
  }) => (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSelect('sobre', 'Sobre a Malu')}
    >
      Sobre a Malu
    </button>
  ),
}));

vi.mock('./TypingDots', () => ({
  default: () => <div>Assistente digitando</div>,
}));

describe('ChatWindow (componente) - unit', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
    configurable: true,
    value: vi.fn(),
    });
    
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  const makeMocks = () => {
    const onClose = vi.fn();

    return {
      onClose,
      titleId: 'chat-title',
    };
  };

  test('deve renderizar a saudação inicial e os controles do chat', () => {
    const { onClose, titleId } = makeMocks();

    render(
      <ChatWindow
        open={false}
        closing={false}
        onClose={onClose}
        titleId={titleId}
      />,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(CHAT_GREETING.text)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Fechar chat' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'Escreva sua mensagem' }),
    ).toBeInTheDocument();
  });

  test('deve chamar onClose ao clicar no botão de fechar', () => {
    const { onClose, titleId } = makeMocks();

    render(
      <ChatWindow
        open={false}
        closing={false}
        onClose={onClose}
        titleId={titleId}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Fechar chat' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('deve manter o botão de envio desabilitado quando a mensagem estiver vazia', () => {
    const { onClose, titleId } = makeMocks();

    render(
      <ChatWindow
        open={false}
        closing={false}
        onClose={onClose}
        titleId={titleId}
      />,
    );

    expect(
      screen.getByRole('button', { name: 'Enviar mensagem' }),
    ).toBeDisabled();
  });

  test('deve enviar a mensagem e limpar o campo de texto', () => {
    const { onClose, titleId } = makeMocks();

    render(
      <ChatWindow
        open={false}
        closing={false}
        onClose={onClose}
        titleId={titleId}
      />,
    );

    const input = screen.getByRole('textbox', {
      name: 'Escreva sua mensagem',
    });

    fireEvent.change(input, { target: { value: '  Quero conhecer os projetos  ' } });
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensagem' }));

    expect(
      screen.getByText('Quero conhecer os projetos'),
    ).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(screen.getByText('Assistente digitando')).toBeInTheDocument();
  });

  test('deve exibir a resposta após o tempo de processamento', () => {
    const { onClose, titleId } = makeMocks();

    render(
      <ChatWindow
        open={false}
        closing={false}
        onClose={onClose}
        titleId={titleId}
      />,
    );

    fireEvent.change(
      screen.getByRole('textbox', { name: 'Escreva sua mensagem' }),
      { target: { value: 'Quero conhecer os projetos' } },
    );

    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensagem' }));

    act(() => {
      vi.advanceTimersByTime(420);
    });

    expect(resolveAnswer).toHaveBeenCalledWith(
      'Quero conhecer os projetos',
    );
    expect(
      screen.getByText('Esta é uma resposta de teste.'),
    ).toBeInTheDocument();
    expect(screen.queryByText('Assistente digitando')).not.toBeInTheDocument();
  });

  test('deve responder ao selecionar um atalho', () => {
    const { onClose, titleId } = makeMocks();

    render(
      <ChatWindow
        open={false}
        closing={false}
        onClose={onClose}
        titleId={titleId}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Sobre a Malu' }));

    expect(screen.getAllByText('Sobre a Malu')).toHaveLength(2);
    expect(resolveAnswer).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(420);
    });

    expect(resolveAnswer).toHaveBeenCalledWith('sobre');
    expect(
      screen.getByText('Esta é uma resposta de teste.'),
    ).toBeInTheDocument();
  });

  test('deve focar o campo de texto quando o chat estiver aberto e não estiver fechando', () => {
    const { onClose, titleId } = makeMocks();

    render(
      <ChatWindow
        open
        closing={false}
        onClose={onClose}
        titleId={titleId}
      />,
    );

    expect(
      screen.getByRole('textbox', { name: 'Escreva sua mensagem' }),
    ).toHaveFocus();
  });
});