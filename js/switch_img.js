function switch_img(orig_img, new_img) {
    if (!orig_img.dataset.original)
        orig_img.dataset.original = orig_img.src;
    if (orig_img.src.includes(new_img))
        orig_img.src = orig_img.dataset.original;
    else
        orig_img.src = new_img;
}
