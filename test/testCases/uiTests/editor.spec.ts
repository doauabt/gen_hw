import { test } from '@playwright/test';
import { EditorPage } from '../../pages/editor/editorPage';



test.describe('Editor UI tests', () => {
  let editorPage: EditorPage;

  test.beforeEach(async ({ page }) => {
      editorPage = new EditorPage(page);
      await editorPage.openPage();
  });


  test('task 3 - format text', async ({ page }) => {
    await editorPage.formatText('Automation', 'bold')
    await editorPage.formatText('Test', 'underline')
    await editorPage.formatText('Example', 'none')

    await editorPage.verifyTextFormatting('Automation', 'strong');
    await editorPage.verifyTextFormatting('Test', 'u');
  });
});