import { component$, useSignal } from '@builder.io/qwik';
import { Popover, usePopover } from '@qwik-ui/headless';
export const ReproComponent = component$(() => {
  const popoverId = 'programmatic-id';
  const anchorRef = useSignal<HTMLElement | undefined>();
  const { togglePopover } = usePopover(popoverId);

  return (
    <>
    <Popover.Root id={popoverId} bind:anchor={anchorRef} manual>
      {/* can be anywhere as long as ref is set */}
      <button
        type="button"
        ref={anchorRef}
        class="popover-invoker"
        onClick$={async () => {
            console.log("hi");
            await togglePopover()
        }}
      >
        Click me
      </button>
      <Popover.Panel class="popover-panel popover-programmatic">
        I'm a programmatically opened popover!
      </Popover.Panel>
    </Popover.Root>
      <button
        type="button"
        onClick$={() => {
            console.log("hiiiii");
        }}
      >
        Click meeeee
      </button>
    </>
  );
});
