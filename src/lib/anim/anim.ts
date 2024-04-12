export const gsapTimelineAnim = (
  timeline,
  rotationRef,
  target1,
  target2,
  animProps
) => {
  timeline.to(rotationRef.current.rotation, {
    duration: 1,
    ease: "power3.inOut",
  });

  timeline.to(
    target1,
    {
      ...animProps,
      ease: "power3.inOut",
    },
    "<"
  );

  timeline.to(
    target2,
    {
      ...animProps,
      ease: "power3.inOut",
    },
    "<"
  );
};
