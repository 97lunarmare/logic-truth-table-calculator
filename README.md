# Propositional Logic Calculator

A simple site that allows the user to enter some propositional logic and displays the respective truth table.

[View the demo.](https://truthtable.matthewlang.tech)

## Example
Given the input `p then q`, the following truth table will be generated.

| p | q | p ∧ q |
|---|---|-------|
| T | T | <b>T</b> |
| T | F | F |
| F | T | T |
| F | F | T |

## Contributing

Please feel free to contribute to this repository as there are many things that could be improved, such as;

### To-do
- Abstract the truth-table generation code from the table rendering code (currently they are tightly coupled)
- Address the parentheses issue, where order of precedence of `p then q then r` cannot be inferred without the use of brackets.
- Show intermediate truths. For example, `(p and q) then (r and s)` could show the intermediate truths of `p and q` and `r and s` before showing the final truth.
- Functionality to export the truth table as `.csv` and similar formats.
- Functionality to compare two expressions to prove
logical equivalence. Currently you can use the equivalence operand, i.e `(p then q) <-> (!p or q)`