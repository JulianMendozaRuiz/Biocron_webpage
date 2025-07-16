class Documents {
  constructor(
    public termsOfUse: string,
    public privacyPolicy: string,
    public dataTreatmentPolicy: string,
  ) {}
}

class Routes {
  constructor(
    public aboutUs: string,
    public services: string,
    public industries: string,
    public blog: string,
    public contact: string,
  ) {}
}

class Socials {
  constructor(
    public instagram: string,
    public linkedin: string,
    public email: string,
  ) {}
}

export default class FooterClass {
  constructor(
    public id: string,
    public description: string,
    public copyright: string,
    public documents: Documents,
    public routes: Routes,
    public socialsTitle: string,
    public socials: Socials,
  ) {}
}
