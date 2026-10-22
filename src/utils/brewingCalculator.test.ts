import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateBrewWater,
  calculateCoffeeDose,
  validateEmail,
  formatTimerSeconds,
  BREW_PROFILES
} from './brewingCalculator';

test('calculateBrewWater calculates exact ml based on ratio', () => {
  assert.equal(calculateBrewWater(15, 16), 240);
  assert.equal(calculateBrewWater(20, 15), 300);
  assert.equal(calculateBrewWater(18, 2), 36);
  assert.equal(calculateBrewWater(0, 16), 0);
  assert.equal(calculateBrewWater(-5, 16), 0);
});

test('calculateCoffeeDose calculates target grams accurately', () => {
  assert.equal(calculateCoffeeDose(240, 16), 15);
  assert.equal(calculateCoffeeDose(300, 15), 20);
  assert.equal(calculateCoffeeDose(0, 15), 0);
});

test('validateEmail handles various email input formats', () => {
  assert.equal(validateEmail('guest@example.com'), true);
  assert.equal(validateEmail('roaster.heirloom@emberorigin.coffee'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('user@'), false);
  assert.equal(validateEmail('@domain.com'), false);
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail('   '), false);
});

test('formatTimerSeconds formats mm:ss correctly', () => {
  assert.equal(formatTimerSeconds(0), '00:00');
  assert.equal(formatTimerSeconds(65), '01:05');
  assert.equal(formatTimerSeconds(180), '03:00');
  assert.equal(formatTimerSeconds(240), '04:00');
});

test('BREW_PROFILES has required methods and realistic ratios', () => {
  assert.ok(BREW_PROFILES['pour-over']);
  assert.ok(BREW_PROFILES['espresso']);
  assert.equal(BREW_PROFILES['pour-over'].defaultRatio, 16);
  assert.equal(BREW_PROFILES['espresso'].defaultRatio, 2);
});
