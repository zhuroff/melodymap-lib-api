type SortingValue = Record<string, 1 | -1>

interface MongoListRequestConfig {
  page: number;
  sort: SortingValue;
  limit: number;
}

export class APIMongoDB {
  async createEntity<T>(payload: T): Promise<boolean> {
    throw new Error()
  }

  async getEntity<T>(id: string, path?: string): Promise<T> {
    throw new Error()
  }

  async getEntityList<T>(config: MongoListRequestConfig): Promise<T[]> {
    throw new Error()
  }

  async updateEntity<T>(props: Partial<T>): Promise<boolean> {
    throw new Error()
  }

  async deleteEntity(id: string): Promise<boolean> {
    throw new Error()
  }
}