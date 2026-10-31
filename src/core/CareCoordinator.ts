export interface CareReferral {
  id: string;
  memberId: string;
  serviceType: string;
  provider: string;
  status: "pending" | "active" | "completed";
  createdAt: string;
}

export class CareCoordinator {
  private referrals: CareReferral[] = [];

  createReferral(
    memberId: string,
    serviceType: string,
    provider: string
  ): CareReferral {
    const referral: CareReferral = {
      id: crypto.randomUUID(),
      memberId,
      serviceType,
      provider,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    this.referrals.push(referral);

    return referral;
  }

  getReferrals(): CareReferral[] {
    return this.referrals;
  }

  activateReferral(id: string) {
    const referral = this.referrals.find(r => r.id === id);

    if (referral) {
      referral.status = "active";
    }

    return referral;
  }
}

export const careCoordinator =
  new CareCoordinator();
