# `typescript-issue-generator-inference`

A minimal reproducible example of a bug that involves the typechecking of generators.

The problem is that generators cannot typecheck if the inferred type of the return type does not match the declared one.
