import { memberHealthProfile } from "./MemberHealthProfile";
import { careCoordinator } from "./CareCoordinator";
import { wellnessPrograms } from "./WellnessPrograms";

export class HealthReport {
  generate() {
    return {
      profiles: memberHealthProfile.getProfiles().length,
      referrals: careCoordinator.getReferrals().length,
      programs: wellnessPrograms.getPrograms().length,
      generatedAt: new Date().toISOString(),
    };
  }
}

export const healthReport =
  new HealthReport();
