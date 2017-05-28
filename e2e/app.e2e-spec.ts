import { RailreloadedPage } from './app.po';

describe('railreloaded App', () => {
  let page: RailreloadedPage;

  beforeEach(() => {
    page = new RailreloadedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
