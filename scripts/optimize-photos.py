from pathlib import Path
from PIL import Image

src_dir = Path(r"C:\Users\joudy\.cursor\projects\c-Users-joudy-OneDrive-Documents-ROYAL-SUITE\assets")
dest_dir = Path(r"C:\Users\joudy\OneDrive\Documents\ROYAL-SUITE\public\images")
dest_dir.mkdir(parents=True, exist_ok=True)

mapping = {
    "royal-suite-living-cairo.png": "royal-suite-living-room.png",
    "royal-suite-hero-daylight.png": "royal-suite-daylight-suite.png",
    "royal-suite-bedroom-two-guest.png": "royal-suite-two-guest-bedroom.png",
    "royal-suite-family-suite.png": "royal-suite-family-suite.png",
    "royal-suite-bathroom.png": "royal-suite-bathroom.png",
    "royal-suite-balcony-cairo.png": "royal-suite-balcony-nasr-city.png",
    "royal-suite-kitchenette.png": "royal-suite-kitchenette.png",
    "royal-suite-front-desk.png": "royal-suite-front-desk.png",
    "royal-suite-linen-detail.png": "royal-suite-linen-detail.png",
}

for src_name, dest_name in mapping.items():
    src = src_dir / src_name
    dest = dest_dir / dest_name.replace(".png", ".webp")
    img = Image.open(src).convert("RGB")
    img.save(dest, "WEBP", quality=78, method=6)
    print(dest.name, dest.stat().st_size)
