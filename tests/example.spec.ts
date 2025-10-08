import { test, expect, Page } from '@playwright/test'

const gotoApp = async (page: Page) => {
  await page.goto('http://localhost:9000/#/')
  await expect(page.locator('#q-app')).toBeVisible()
  await expect(page.locator('form')).toBeVisible()
}

const nameInput   = (page: Page) => page.getByLabel('Your name')
const ageInput    = (page: Page) => page.getByLabel('Your age')
const submitBtn   = (page: Page) => page.getByRole('button', { name: /submit/i })
const resetBtn    = (page: Page) => page.getByRole('button', { name: /reset|clear/i })
const termsSwitch = (page: Page) => page.getByRole('switch', { name: /i accept/i })

test.describe('Quasar Form Input Validation', () => {
  test.beforeEach(async ({ page }) => {
    await gotoApp(page)
  })

  test('should validate name input', async ({ page }) => {
    await submitBtn(page).click()
    await expect(nameInput(page)).toHaveValue('')
  })

  test('should validate age input', async ({ page }) => {
    await nameInput(page).fill('John Doe')
    await submitBtn(page).click()
    await ageInput(page).fill('-1')
    await submitBtn(page).click()
  })

  test('should handle terms acceptance', async ({ page }) => {
    await nameInput(page).fill('John Doe')
    await ageInput(page).fill('25')
    await termsSwitch(page).click()
    await submitBtn(page).click()
  })

  test('should reset form inputs', async ({ page }) => {
    await nameInput(page).fill('John Doe')
    await ageInput(page).fill('25')
    await termsSwitch(page).click()
    await resetBtn(page).click()
    await expect(nameInput(page)).toHaveValue('')
    await expect(ageInput(page)).toHaveValue('')
  })
})
