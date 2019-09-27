type ExampleReturnType = {
  keyWithLiteralValue: 'foo' | 'bar';
};

function normalFunctionThatInfersWell(): ExampleReturnType {
  return {
    // TS knows that `keyWithLiteralValue` has type `'foo' | 'bar'`
    keyWithLiteralValue: 'foo',
  };
}

function* generatorFunctionThatDoesNotInferWell(): Generator<
  undefined,
  ExampleReturnType
> {
  yield undefined;
  return {
    // TS thinks that `keyWithLiteralValue` has type `string`
    // so it refuses to typecheck
    keyWithLiteralValue: 'foo',
  }
}
