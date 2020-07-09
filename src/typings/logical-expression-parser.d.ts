declare module "logical-expression-parser" {
  const lep: {
    parse: (
      expression: string,
      literalChecker: (t: string) => boolean
    ) => boolean
  }

  export default lep
}
