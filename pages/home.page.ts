import type { Response } from '@playwright/test';
import { BasePage } from './base.page.js';

export class HomePage extends BasePage {
  async open(): Promise<Response | null> {
    return this.navigate();
  }
}
