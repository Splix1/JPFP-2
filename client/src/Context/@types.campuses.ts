export interface Campus {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  imageUrl: string;
  address: string;
  description: string;
}

export type CampusContextType = {
  campuses: Campus[];
  addCampus: (campus: Campus) => void;
  removeCampus: (id: number) => void;
};
