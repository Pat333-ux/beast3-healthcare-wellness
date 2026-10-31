export interface Resource {
  id: string;
  category: string;
  name: string;
  description: string;
}

export class ResourceNavigator {
  private resources: Resource[] = [];

  addResource(
    category: string,
    name: string,
    description: string
  ): Resource {
    const resource: Resource = {
      id: crypto.randomUUID(),
      category,
      name,
      description,
    };

    this.resources.push(resource);

    return resource;
  }

  getResources() {
    return this.resources;
  }

  getByCategory(category: string) {
    return this.resources.filter(
      resource => resource.category === category
    );
  }
}

export const resourceNavigator =
  new ResourceNavigator();
