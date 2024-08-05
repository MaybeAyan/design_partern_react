export interface UserService {
  getUserData(userId: string): Promise<string>;
}

export class RealUserService implements UserService {
  async getUserData(userId: string): Promise<string> {
    // 模拟 API 调用
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`用户： ${userId} 的数据`);
      }, 1000);
    });
  }
}
