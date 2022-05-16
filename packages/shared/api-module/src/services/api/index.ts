import { apiInstance } from '../../api/config';

export class Api {
  static getPosts(): Promise<void> {
    return apiInstance.get('posts');
  }
}
