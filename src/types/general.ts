
interface IObj {
  [key: string]: any;
}

interface IOrganization {
  name: string;
  status: number;
}

interface IMetricResult {
  id: number;
  name: string;
  tribe: string;
  organization: string;
  coverage: string;
  codaSmells: number;
  bugs: number;
  vulnerabilities: number;
  hotspots: number;
  verificationState: string;
  state: string;
}
