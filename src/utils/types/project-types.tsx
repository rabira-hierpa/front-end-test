export interface IProject {
  id: number;
  description: null;
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  created_at: string;
  default_branch: string;
  tag_list: any[];
  topics: any[];
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  web_url: string;
  readme_url: null;
  forks_count: number;
  avatar_url: null;
  star_count: number;
  last_activity_at: string;
  namespace: Namespace;
}

export interface Namespace {
  id: number;
  name: string;
  path: string;
  kind: string;
  full_path: string;
  parent_id: null;
  avatar_url: string;
  web_url: string;
}
