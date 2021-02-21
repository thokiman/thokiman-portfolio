export const services = {
  id: "cc10e711-8cfb-4d22-b43b-b70a68a304a3",
  title: "Service",
  routeName: "/service",
  art: {
    id: "20b50a71-04dc-4c4f-9af2-38a06f6c0885",
    title: "Visual Communication Design",
    visual_art_description: [
      {
        id: "cde416e1-7ba8-412a-ba21-f9e99b7b0a93",
        title: "Sketch",
        description:
          "Rough drawing representing the chief features of an object or scene and often made as a preliminary study",
      },
      {
        id: "0a9afc1c-e54d-4f52-964d-831867a60053",
        title: "Raster",
        description:
          "Raster graphics are bitmaps. A bitmap is a grid of individual pixels that collectively compose an image. Raster graphics render images as a collection of countless tiny squares. Each square, or pixel, is coded in a specific hue or shade.",
      },
      {
        id: "c3d1bd01-d0ff-481e-adea-b03f8d3b196f",
        title: "Vector",
        description:
          "Computer graphics images that are defined in terms of points on a Cartesian plane, which are connected by lines and curves to form polygons and other shapes.",
      },
    ],
    routeName: "/service/visualart",
    items: [
      {
        id: "756742f9-2374-4b77-9e57-c6f71d6bc46e",
        field: "adobe-illustrator",
        iconPath: "/images/icon/service/visual-art-icon/adobe-illustrator.svg",
      },
      {
        id: "e4e26efe-6c1c-4622-9d48-18de5067c2d6",
        field: "procreate",
        iconPath: "/images/icon/service/visual-art-icon/procreate.svg",
      },
      {
        id: "37f650e8-b5eb-4cd8-be02-4f2c7e8cc529",
        field: "sketchbook",
        iconPath: "/images/icon/service/visual-art-icon/sketchbook.svg",
      },
    ],
  },
  photo: {
    id: "8fdb3b79-1978-4c22-b908-4c537492a16e",
    title: "Photography",
    description: [
      {
        id: "66947e6c-7651-415b-87ec-07005a72e6b6",
        title: "Photo Shoot",
        description:
          "Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.",
        items: [
          {
            id: "787ac0aa-479c-4b26-8cd4-b96d793b54a6",
            name: "adobe-lightroom",
            iconPath:
              "/images/icon/service/photography-icon/adobe-lightroom.svg",
          },
          {
            id: "688e2dab-e053-408a-baa8-cc10336e1545",
            name: "adobe-photoshop",
            iconPath:
              "/images/icon/service/photography-icon/adobe-photoshop.svg",
          },
          {
            id: "0edc935e-1005-45ba-96f8-52707fc52b47",
            name: "canon-eos-technology",
            iconPath:
              "/images/icon/service/photography-icon/canon-eos-technology.svg",
          },
        ],
      },
    ],
    routeName: "/service/photo",
    items: [
      {
        field: "Adobe Stock",
        linkUrl: "https://stock.adobe.com/contributor/209666177/Thomas",
        iconPath: {
          id: "2f3963a3-d73a-4835-8999-931226122bb2",
          field: "adobe-stock",
          iconPath:
            "/images/icon/service/photography-icon/photo-stock-icon/adobe-stock.svg",
        },
      },
      {
        field: "EyeEm",
        linkUrl: "https://www.eyeem.com/u/thokimanpeace",
        iconPath: {
          id: "f84d27c9-2810-412f-ba1f-c9e8e974c5bb",
          field: "eye-em",
          iconPath:
            "/images/icon/service/photography-icon/photo-stock-icon/eye-em.svg",
        },
      },
      {
        field: "ShutterStock",
        linkUrl: "http://www.shutterstock.com/g/ThomasSantosa",
        iconPath: {
          id: "a9aab223-c656-48fb-9e24-c6e00c434655",
          field: "shutter-stock",
          iconPath:
            "/images/icon/service/photography-icon/photo-stock-icon/shutter-stock.svg",
        },
      },
    ],
  },
  engineer: {
    id: "8c0a06fb-bf8d-44f5-b91a-1d645c94b1b7",
    title: "Engineer",
    description: [
      {
        id: "f02f9241-eb58-4b84-8d12-1b30c0c2c5a9",
        title: "Process Engineer",
        description:
          "Responsible for designing, implementing, controlling and optimizing industrial processes, especially continuous ones within the chemical, petrochemical, agriculture, mineral processing, food, pharmaceutical, and biotechnological industries.",
      },
      {
        id: "340b824c-457c-493c-b1c3-cc8241f875f1",
        title: "Distributed Control System Operator",
        description:
          "Responsible for recording, compiling, reporting and documenting operating data, and monitoring process indicators. Coordinate the start-up, shut-down (normal and emergency) and normal operations/maintenance activities with lead operator and field operators.",
      },
      {
        id: "72f55e1c-ff71-45b8-8f91-c55ba7f7f48b",
        title: "Field Operator",
        description:
          "Responsible for setting up, operating and troubleshooting a variety of machines and/or equipment on customer site in accordance with established procedures and guidelines. Reads and interprets blueprints and diagrams to select, position and secure machinery.",
      },
    ],
    routeName: "/service/engineer",
    items: [
      {
        id: "9fb176de-86d0-4602-95c5-8ba127d54268",
        field: "dcs",
        iconPath: "/images/icon/service/engineer-icon/dcs.svg",
      },
      {
        id: "fd7b4c3b-3e10-4be7-9117-082128e8520a",
        field: "field-operation",
        iconPath: "/images/icon/service/engineer-icon/field-operation.svg",
      },
      {
        id: "97fb6d59-202c-4d80-906f-4549eaaac0e1",
        field: "process-engineer",
        iconPath: "/images/icon/service/engineer-icon/process-engineer.svg",
      },
    ],
  },
  fullstack: {
    id: "cdd1da3a-a60c-4e9a-bae7-2e1d3144adaa",
    title: "Fullstack Web Developer",
    description: [
      {
        id: "c65717bd-a994-4dd7-ab2a-91478e3a9a43",
        title: "Web Developer",
        description:
          "Designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms.",
      },
    ],
    routeName: "/service/fullstack",
    items: [
      {
        id: "337addb0-95c7-4c93-8664-89a53464687e",
        field: "express",
        iconPath:
          "/images/icon/service/full-stack-developer/back-end/express.svg",
      },
      {
        id: "ce083e39-019a-4a34-9006-f9439ea3a4da",
        field: "firebase-db",
        iconPath:
          "/images/icon/service/full-stack-developer/back-end/firebase-db.svg",
      },
      {
        id: "9a7c7c67-51c4-4b4a-ab50-ed0456d13084",
        field: "node-js",
        iconPath:
          "/images/icon/service/full-stack-developer/back-end/node-js.svg",
      },
      {
        id: "ffe7e1c4-f653-4c4e-ae2b-666149ec8656",
        field: "react-ui-library",
        iconPath:
          "/images/icon/service/full-stack-developer/front-end/react-ui-library.svg",
      },
      {
        id: "e10cd61d-4192-4016-a221-7418abf8015e",
        field: "python",
        iconPath:
          "/images/icon/service/full-stack-developer/data-engineer/python.svg",
      },
      {
        id: "433f3697-672f-4f32-9ecb-050a6fdd6b30",
        field: "sql",
        iconPath:
          "/images/icon/service/full-stack-developer/data-engineer/sql.svg",
      },
    ],
  },
};
