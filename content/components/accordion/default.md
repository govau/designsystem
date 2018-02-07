---
layout: component/code-demo
example: examples/example-default
headline: Default Accordion
code:
  - HTML: |
      <section class="au-accordion">
        <a href="#accordion-default" class="au-accordion__title js-au-accordion" aria-controls="accordion-default" aria-expanded="true" aria-selected="true" role="tab" onclick="return AU.accordion.Toggle( this )">
          Accordion title
        </a>

        <div class="au-accordion__body" id="accordion-default" aria-hidden="false">
          <div class="au-accordion__body-wrapper">
            <div class="no-a11y-test">
              Here <a href="#url">is</a> some accordion content
            </div>
          </div>
        </div>
      </section>
  - React: |
      import AUaccordion from '@gov.au/accordion';

      <AUaccordion header="Accordion title">
        Here <a href="#url">is</a> some accordion content
      </AUaccordion>
---

A `strong` button style used for primary actions on a screen such as a `Submit` button on a form, or other actions that are critical in a user workflow. A
primary button should be only used once per view.