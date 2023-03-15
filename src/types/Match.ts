export interface Match {
  _id: number;
  tourNumber: number;
  teamHome: Team;
  teamAway: Team;
  scoreFtHome: number;
  scoreFtAway: number;
  stadium: Stadium;
  date: string;
}

interface Team {
  name: string;
  logo: string;
  logoId: number;
}

interface Stadium {
  name: string;
}
