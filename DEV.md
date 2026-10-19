# Planejando Testes de UI (foco em comportamento)

## 1. Arrange - O que o usuário enxerga?
Identifique os elementos que serão utilizados no teste.

- **Textos:** `"Entrar"`, `"Salvar"`, `"Cancelar"`.
- **Roles:** `button`, `textbox`, `checkbox`, `menu`.
- **Labels:** rótulos associados aos campos de entrada.

**Anotação:** priorize localizar elementos por seus papéis acessíveis e nomes, evitando dependência de classes CSS e da estrutura interna do DOM.

## 2. Act - O que o usuário faz?
Identifique as interações que serão simuladas.

- Clicar em botões.
- Digitar em campos.
- Selecionar opções.
- Executar scroll ou hover.
- Enviar formulários.

**Anotação:** prefira `userEvent` para simular interações do usuário.

## 3. Assert - Qual é o resultado esperado?
Defina o comportamento que precisa ser validado.

- Mensagem de sucesso aparece.
- Spinner aparece e desaparece.
- Botão fica desabilitado quando o formulário é inválido.
- Usuário é redirecionado.
- Modal é aberto ou fechado.

**Anotação:** valide o resultado observável, não apenas a execução da ação.

## 4. BDD - Como descrever o cenário?
- **Given:** contexto inicial.
- **When:** ação executada.
- **Then:** resultado esperado.

Relaciona-se ao padrão AAA:

| BDD | AAA |
|---|---|
| Given | Arrange |
| When | Act |
| Then | Assert |

## 5. Queries - Como localizar elementos?

| Query | Comportamento | Quando usar |
|---|---|---|
| `getBy...` | Erro se não encontrar | Elemento que deve existir |
| `queryBy...` | Retorna `null` se não encontrar | Verificar ausência |
| `findBy...` | Aguarda o elemento aparecer | Elementos assíncronos |

**Principais métodos:**
- `getByRole()` - papel acessível e nome.
- `getByLabelText()` - rótulo do campo.
- `getByText()` - texto visível.
- `getByPlaceholderText()` - placeholder.
- `getByTestId()` - atributo `data-testid`.

**Prioridade:** prefira queries acessíveis. Utilize `data-testid` quando necessário.

---

### Checklist antes de escrever

- Qual comportamento será testado?
- Qual ação o usuário executa?
- Qual resultado é esperado?
- Como localizar os elementos?
- Preciso aguardar uma operação assíncrona?

**Regra geral:** teste o comportamento que o usuário percebe, não os detalhes internos da implementação.