/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

type unionType = string|number;
type literalType = 'enable' | 'disable';

let union: unionType;

let literal: literalType;