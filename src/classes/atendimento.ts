export abstract class Atendimento {
  constructor(
    public data: string,
    private tempo: number,
    protected valor: number
  ) {}
}
