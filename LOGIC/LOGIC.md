This is a logic test.

Given the following 2d matrix (this is a sample input, you should consider alternative inputs):

```
[[1,1,1,1],
[0,1,1,0],
[0,1,0,1],
[0,1,9,1],
[1,1,1,1]]
```

Create a virtual robot, that can walk up, right, left and bottom. The robot cannot leave the borders.

Find the shortest path to `9`. `1` is a walkable place. `0` is a hole, and you must avoid it.

Your initial position is `0x0`, the `9` position is `2x3`.

Good luck!


Resposta:

Levando em conta uma busca cega, o robô não conhece a posição do `9`, e dada essa matriz como entrada, uma 
estratégia que o robô poderia adotar para achar o caminho mais curto seria:

- validar as casas adjacentes ao nó procurando o `9`. Se uma lateral for o `9` vá para ela;
- Caso não seja `9` tente ir para baixo;
- Se para baixo for um buraco `0`, vá para direita;
- Repita as etapas do inicio;

Seguindo essas instruções logo vai ser encontrado o `9`.

Porém, dadas entradas aleatórias de labirinto é muito dificil estipular uma estratégia de movimentação
que seja ótima para encontrar o menor caminho, e mesmo levando em conta que o robô conhece a posição final,
seria necessário testar todas as possibilidades de estratégia de movientação para dizer com certeza qual 
gera o caminho menor ou manter um histórico das posições que foram visitadas para delimitar um caminho
mais curto iterativamente.
