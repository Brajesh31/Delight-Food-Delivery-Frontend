# Accessibility Guide

Accessibility is an ongoing implementation and testing responsibility. The presence of React components and responsive CSS does not establish conformance.

## Areas to review

### Navigation
- Use real links for navigation and buttons for actions.
- Ensure the current route or active section is communicated accessibly.
- Verify in-page anchors are reachable and not hidden behind fixed elements.

### Menu categories and food cards
The category selector and item quantity controls currently use clickable image or generic container elements. These should be reviewed for keyboard operation, semantic button behavior, and accessible names. Food images currently use empty alt text in several places. Decide whether each image is informative or decorative and provide appropriate text alternatives.

### Cart
- Use semantic table/list structure for item and quantity information.
- Give the remove control an accessible name.
- Ensure quantity and total changes are understandable to assistive technology users.
- Do not rely on color or an icon alone to convey an action.

### Login and delivery forms
- Associate every input with a visible label.
- Use appropriate input types and autocomplete attributes.
- Make validation errors clear and programmatically associated with fields.
- Ensure modal focus is managed, trapped appropriately, and returned to the trigger when closed.
- The current forms are UI only. Do not collect real credentials or customer information.

### Motion and scrolling
Respect reduced-motion preferences for smooth scrolling and transitions. Ensure the scroll-to-top control has a meaningful accessible label and is not keyboard-focusable while hidden.

## Manual checks
1. Navigate with keyboard only.
2. Test a screen reader with headings, landmarks, and form fields.
3. Verify focus order and visible focus.
4. Test zoom and narrow viewport reflow.
5. Check text contrast and interactive target sizes.
6. Confirm modal focus behavior.
7. Test with reduced motion enabled.

This document is a checklist, not a claim of WCAG certification.
