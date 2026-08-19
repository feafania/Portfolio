export function initCodeHighlight() {
  if (typeof hljs === "undefined") return;

  $(".code-example__body code").each(function () {
    hljs.highlightElement(this);
  });

  $(".code-example").each(function () {
    const $example = $(this);
    const $header = $example.find(".code-example__header");
    const $code = $example.find("code");

    if (!$header.length || !$code.length) return;

    if (!navigator.clipboard) return;

    const $btn = $(`
      <button type="button" class="code-example__copy">
        <i class="fa-regular fa-copy" aria-hidden="true"></i>
        <span>Copy</span>
      </button>
    `);

    $btn.on("click", function () {
      navigator.clipboard.writeText($code.text()).then(() => {
        $btn.addClass("is-copied");

        const $label = $btn.find("span");
        const original = $label.text();

        $label.text("Copied!");

        setTimeout(() => {
          $btn.removeClass("is-copied");
          $label.text(original);
        }, 1500);
      });
    });

    $header.append($btn);
  });
}