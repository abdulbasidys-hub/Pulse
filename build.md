# PULSE Landing Page --- Build Specification

## 1. Project Overview

Build a polished, responsive landing page for **PULSE**, a fictional
Web3/stablecoin payment platform created as a portfolio project by
Nightfall.

**Product concept:** PULSE helps freelancers and digital businesses
receive and manage global payments using supported stablecoins.

**Tagline:**\
"Your work is global. Your payments should be too."

This is a fictional product concept and a portfolio demonstration. Do
not present PULSE as a live financial service, imply that real payments
can be processed, or invent regulatory/licensing claims.

## 2. Primary Objective

Create a high-quality landing page that makes the product concept
immediately understandable and demonstrates Nightfall's ability to
design and build a credible Web3 product website.

The page should: - Communicate the product and its value within the
first screen. - Feel like a real, considered fintech/Web3 brand rather
than a generic crypto template. - Explain the product simply and
confidently. - Guide visitors toward a clear call to action. - Work
exceptionally well on mobile, tablet, and desktop.

## 3. Brand System

### Brand personality

-   Modern
-   Confident
-   Minimal
-   Clear
-   Trustworthy
-   International

Avoid loud crypto clichés, excessive gradients, visual clutter, generic
AI-looking layouts, and unnecessary animation.

### Colors

Use these brand colors as the foundation:

  Role               Color           Hex
  ------------------ --------------- -----------
  Primary dark       Midnight navy   `#0A0F2D`
  Accent             Electric lime   `#B6FF00`
  Secondary accent   Blue            `#3B5BFF`
  Light              White           `#FFFFFF`

Use the lime sparingly for high-value emphasis and calls to action.
Maintain strong contrast and accessible text readability.

### Typography

-   Primary typeface: **Poppins**
-   Use a clear hierarchy with confident headings and highly readable
    body text.
-   Avoid oversized amounts of text and excessive all-caps labels.

### Logo

Use the supplied PULSE logo asset if it exists in the project files. If
it has not yet been supplied, create a clean text-based PULSE wordmark
as a temporary implementation. Do not invent a complicated symbol or
permanently lock in a new logo direction.

## 4. Audience

Primary audience: - Freelancers working with international clients. -
Digital service providers and independent creators. - Small digital
businesses receiving cross-border payments.

The copy should speak to people who work internationally and want a
simpler way to receive and track payments.

## 5. Product Narrative

PULSE is built around four core capabilities:

1.  **Payment links** --- create and share a link to request payment.
2.  **Stablecoin receipts** --- receive supported stablecoins.
3.  **Incoming-payment tracking** --- see the status of expected and
    received payments.
4.  **Transaction dashboard** --- view payment activity in one organized
    place.

Do not add unsupported features such as cards, bank withdrawals,
currency conversion, automated invoicing, wallet custody, guarantees, or
specific blockchain/network support unless those details are supplied
later.

## 6. Page Structure

Build this as a focused single-page marketing website.

### A. Navigation

-   PULSE wordmark on the left.
-   Simple anchor links to the page's main sections.
-   Primary CTA on the right.
-   Mobile navigation must be usable and accessible.

### B. Hero

The first screen must establish the product immediately.

Required content: - Headline based on the approved tagline: **"Your work
is global. Your payments should be too."** - Short supporting copy
explaining that PULSE helps freelancers and digital businesses receive
and track global payments using supported stablecoins. - Primary CTA:
**"Get started"** or another concise action that fits the prototype. -
Secondary CTA: **"See how it works"**, linking to the how-it-works
section. - A distinctive product visual, such as a carefully designed
payment activity/dashboard preview.

The hero visual should feel like a real product interface. Use designed
interface components rather than a generic stock image. Clearly treat
any sample names, amounts, and transactions as illustrative demo data.

### C. Problem

Explain the friction freelancers and digital businesses can experience
when receiving international payments.

Keep this section concise. Focus on understandable problems such as
fragmented payment information, uncertainty about incoming payments, and
difficulty keeping payment activity organized. Do not make unverified
claims about fees, speed, or the performance of existing providers.

### D. Solution

Introduce PULSE as a simpler place to request, receive, and track
supported stablecoin payments.

Use a strong visual hierarchy and a short explanation. Avoid repeating
the hero copy word for word.

### E. Features

Present the four approved capabilities: - Payment links - Supported
stablecoin receipts - Incoming-payment tracking - Transaction dashboard

Each feature should have: - A clear title. - One short, benefit-led
description. - A distinct visual treatment or small interface
illustration.

### F. How It Works

Show a simple three-step flow:

1.  Create a payment link.
2.  Share it with your client.
3.  Track the incoming payment in PULSE.

Keep the explanation visual and easy to scan. Do not imply that the
prototype actually processes payments.

### G. Closing CTA

End with a strong, uncluttered CTA that reinforces the product promise.

Because this is a fictional portfolio concept, the CTA must not collect
real financial information or imply a live onboarding flow. It may link
to a clearly labelled demo interaction, a contact destination supplied
by the project owner, or a non-functional prototype state.

### H. Footer

Include: - PULSE wordmark. - A short product description. - Anchor
links. - A discreet note such as **"A concept project by Nightfall."**

Do not invent company addresses, legal entities, social profiles,
support email addresses, terms, privacy policies, or regulatory
statements.

## 7. Visual Direction

The design should feel like a premium fintech product with a Web3
foundation.

Priorities: - Strong composition and deliberate spacing. - Distinctive,
custom-feeling product mockups. - Restrained use of the lime and blue
accents. - Clear section transitions. - Consistent corner radii,
borders, shadows, and spacing. - A visually compelling hero and feature
section. - Subtle motion only where it improves understanding.

Avoid: - Generic crypto landing-page patterns. - Random floating coins,
rockets, charts, or blockchain clichés. - Excessive glassmorphism. - Too
many gradients. - Decorative elements that compete with the product. -
Huge blocks of marketing copy. - Fake testimonials, customer logos,
usage statistics, or trust badges.

## 8. Interactions

Implement only interactions that support the page: - Smooth anchor
navigation. - Responsive mobile menu. - Clear hover and focus states. -
Subtle, purposeful entrance transitions if appropriate. - CTA behavior
that is honest about the project being a concept.

Respect `prefers-reduced-motion`. Ensure all interactive elements are
keyboard accessible.

## 9. Responsive Requirements

The page must be fully responsive.

Check at minimum: - Small mobile: approximately 360px wide. - Large
mobile: approximately 430px wide. - Tablet: approximately 768px wide. -
Desktop: approximately 1440px wide.

On mobile: - Keep the headline readable without awkward line breaks. -
Stack complex layouts cleanly. - Prevent horizontal overflow. - Make
buttons comfortable to tap. - Ensure product mockups remain legible and
do not become cramped.

## 10. Technical Instructions for the Coding Agent

1.  Inspect the existing repository before changing anything.
2.  Identify the current framework, package manager, build scripts, and
    existing conventions.
3.  Preserve the existing stack and project structure. Do not migrate
    frameworks or introduce a new stack without a clear technical
    reason.
4.  Reuse existing dependencies where practical. Avoid unnecessary
    packages.
5.  Build reusable components for repeated elements such as navigation,
    buttons, feature cards, and section layouts.
6.  Keep content and styling maintainable. Avoid placing the entire page
    in one oversized component.
7.  Use semantic HTML and accessible labels.
8.  Optimize images and avoid unnecessarily heavy assets.
9.  Add appropriate page metadata: title, description, theme color, and
    social preview metadata where assets are available.
10. Ensure there are no console errors, broken links, layout overflows,
    or dead controls.
11. Run the project's available lint, type-check, and build commands.
    Fix issues introduced by this implementation.
12. Do not fabricate backend functionality. This task is a front-end
    landing page unless a working backend already exists and the project
    owner explicitly requests its integration.

If the repository is empty, report that fact and propose the smallest
suitable setup before proceeding. Do not silently make major
architecture decisions.

## 11. Content and Asset Handling

-   Use supplied brand assets where available.
-   The PULSE brand video is being prepared separately. Do not block the
    landing page on it.
-   Do not fabricate screenshots of a real, working product. Create
    clearly illustrative UI mockups where needed.
-   Use consistent sample data in all mockups and label it as
    demo/illustrative where necessary.
-   Keep copy concise and proofread.
-   Do not add placeholder testimonials or fake customer proof.

## 12. Definition of Done

The build is complete when:

-   [ ] The full landing page structure is implemented.
-   [ ] The approved PULSE colors and Poppins typography are applied
    consistently.
-   [ ] The hero communicates the product and value proposition
    immediately.
-   [ ] All four approved product capabilities are represented.
-   [ ] The three-step how-it-works flow is clear.
-   [ ] CTA behavior is honest and appropriate for a fictional concept.
-   [ ] Desktop, tablet, and mobile layouts are polished.
-   [ ] Navigation and interactions work.
-   [ ] Accessibility basics are covered, including keyboard focus and
    reduced motion.
-   [ ] No fake claims, testimonials, metrics, or unsupported product
    capabilities appear.
-   [ ] No console errors or broken links remain.
-   [ ] The production build succeeds.

## 13. Final Handover

When finished, provide:

1.  A concise summary of what was built.
2.  The main files/components created or modified.
3.  Any assumptions made because assets or details were missing.
4.  Any remaining tasks or known limitations.
5.  The exact command to run the project locally.
6.  Confirmation that the production build passed, or the full error if
    it did not.

**Important:** Build the landing page as a polished portfolio-quality
product website. Do not begin building the separate Nightfall agency
portfolio site as part of this task.
