import { MeetupPage } from './app.po';

describe('meetup App', () => {
  let page: MeetupPage;

  beforeEach(() => {
    page = new MeetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
