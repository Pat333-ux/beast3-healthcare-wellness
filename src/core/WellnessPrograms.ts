export interface WellnessProgram {
  id: string;
  title: string;
  description: string;
  participants: number;
}

export class WellnessPrograms {
  private programs: WellnessProgram[] = [];

  createProgram(
    title: string,
    description: string
  ): WellnessProgram {
    const program: WellnessProgram = {
      id: crypto.randomUUID(),
      title,
      description,
      participants: 0,
    };

    this.programs.push(program);

    return program;
  }

  enroll(id: string) {
    const program = this.programs.find(
      p => p.id === id
    );

    if (program) {
      program.participants++;
    }

    return program;
  }

  getPrograms() {
    return this.programs;
  }
}

export const wellnessPrograms =
  new WellnessPrograms();
