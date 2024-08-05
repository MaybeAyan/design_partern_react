import { RealUserService, UserService } from './RealUserService';

export class UserServiceProxy implements UserService {
  private realUserService: RealUserService;

  constructor() {
    this.realUserService = new RealUserService();
  }

  async getUserData(userId: string): Promise<string> {
    if (this.checkAccess(userId)) {
      return this.realUserService.getUserData(userId);
    } else {
      throw new Error('没有权限');
    }
  }

  private checkAccess(userId: string): boolean {
    // 模拟权限检查
    return userId === 'admin';
  }
}
