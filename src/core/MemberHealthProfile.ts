export interface HealthProfile {
  id: string;
  memberId: string;
  firstName: string;
  lastName: string;
  wellnessScore: number;
  createdAt: string;
}

export class MemberHealthProfile {
  private profiles: HealthProfile[] = [];

  createProfile(
    memberId: string,
    firstName: string,
    lastName: string
  ): HealthProfile {
    const profile: HealthProfile = {
      id: crypto.randomUUID(),
      memberId,
      firstName,
      lastName,
      wellnessScore: 100,
      createdAt: new Date().toISOString(),
    };

    this.profiles.push(profile);

    return profile;
  }

  getProfiles(): HealthProfile[] {
    return this.profiles;
  }

  getProfile(id: string) {
    return this.profiles.find(
      profile => profile.id === id
    );
  }
}

export const memberHealthProfile =
  new MemberHealthProfile();
