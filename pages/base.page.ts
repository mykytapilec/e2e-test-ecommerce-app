import type { Page, Response } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async navigate(path = '/'): Promise<Response | null> {
    return this.page.goto(path);
  }
}
