export const ALLOWED_IMAGE_TYPES = ["jpeg", "png", "jpg", "webp"];

export const ALLOWED_IMAGE_EXTENSIONS = new RegExp(
  ALLOWED_IMAGE_TYPES.join("|")
);

// Note: jpg and jpeg both map to image/jpeg MIME type
const mimeTypeMap = {
  jpeg: "jpeg",
  jpg: "jpeg", // jpg maps to jpeg MIME type
  png: "png",
  webp: "webp",
};
const uniqueMimeTypes = [
  ...new Set(ALLOWED_IMAGE_TYPES.map((type) => mimeTypeMap[type] || type)),
];
export const ALLOWED_IMAGE_MIME_TYPES = new RegExp(
  `^image/(${uniqueMimeTypes.join("|")})$`
);

// Human-readable error message
export const IMAGE_TYPE_ERROR_MESSAGE = `Only ${ALLOWED_IMAGE_TYPES.join(
  ", "
)} images are allowed!`;
