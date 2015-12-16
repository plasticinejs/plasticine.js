# plasticinejs

Here is a complete overview of the JSONPath syntax:

| Operator                  | Description                                                        |
| :------------------------ | :----------------------------------------------------------------- |
| `$`                       | Root node. Required as first character of path.                    |
| `@`                       | Current node. Available in filters and expressions.                |
| `*`                       | Wildcard. Available anywhere a name or numeric are required.       |
| `..`                      | Deep wildcard. Available anywhere a name is required.              |
| `.<name>`                 | Dot-notated child                                                  |
| `['<name> (, <name>)']`   | Bracket-notated child or children                                  |
| `[<number> (, <number>)]` | Indexed child or children                                          |
| `[?(<expression>)]`       | Filter expression. Expression must evaluate to a boolean value.    |
| `[(<expression>)]`        | Expression. Expression must evaluate to a string or numeric value. |