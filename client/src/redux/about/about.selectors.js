import { createSelector } from 'reselect';

const selectAbout = (state) => state.about;
const selectAllAbout = (state) => state.about.about;
const selectAllOther = (state) => state.about.other;

//route
export const selectAboutRoute = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.routeName
);

export const selectSkillRoute = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSkill.routeName
);

export const selectSkillVisualArtRoute = createSelector(
  [selectAllAbout],
  (about) =>
    about.aboutPath.items.personalSkill.items.visualDesignCommunication
      .routeName
);

export const selectSkillEngineerRoute = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSkill.items.engineer.routeName
);

export const selectSkillTechnologyRoute = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSkill.items.technology.routeName
);

export const selectSummaryRoute = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSummary.routeName
);

export const selectEducationRoute = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalEducation.routeName
);

export const selectProjectRoute = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalProject.routeName
);

export const selectTimelineCareerRoute = createSelector(
  [selectAllAbout],
  (about) => about.careerPath.routeName
);

//page

export const selectIsDropdownHidden = createSelector(
  [selectAbout],
  (about) => about.isDropdownHidden
);

//skill

export const selectSkillVisualDesignCommunication = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSkill.items.visualDesignCommunication
);
export const selectSkillEngineer = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSkill.items.engineer
);
export const selectSkillTechnology = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSkill.items.technology
);

//education
export const selectEducationItemsLastBachelor = createSelector(
  [selectAllAbout],
  (about) =>
    about.aboutPath.items.personalEducation.items.education.items.lastBachelor
);
export const selectEducationItemsLastExperiences = createSelector(
  [selectAllAbout],
  (about) =>
    about.aboutPath.items.personalEducation.items.education.items
      .lastExperiences
);
export const selectEducationItemsLastCourses = createSelector(
  [selectAllAbout],
  (about) =>
    about.aboutPath.items.personalEducation.items.education.items.lastCourses
);
export const selectPersonality = createSelector(
  [selectAllAbout],
  (about) =>
    about.aboutPath.items.personalEducation.items.personality.items.personality
);

//project

export const selectProjectAccomplishmentThesis = createSelector(
  [selectAllAbout],
  (about) =>
    about.aboutPath.items.personalProject.items.accomplishment.items.thesis
);
export const selectProjectAccomplishmentCourses = createSelector(
  [selectAllAbout],
  (about) =>
    about.aboutPath.items.personalProject.items.accomplishment.items.project
      .courses
);
export const selectProjectAccomplishmentExperiences = createSelector(
  [selectAllAbout],
  (about) =>
    about.aboutPath.items.personalProject.items.accomplishment.items.project
      .experiences
);
export const selectProjectAchievementExperiences = createSelector(
  [selectAllAbout],
  (about) =>
    about.aboutPath.items.personalProject.items.achievement.items
      .lastExperiences
);

//summary
export const selectPersonalSummaryLongDescription = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSummary.items.longDescription
);
export const selectPersonalSummaryShortDescription = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSummary.items.shortDescription
);
export const selectPersonalSummaryQuote = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSummary.items.quote
);
export const selectPersonalSummaryCV = createSelector(
  [selectAllAbout],
  (about) => about.aboutPath.items.personalSummary.items.cv
);

export const selectIsVibrate = createSelector(
  [selectAbout],
  (about) => about.isVibrate
);

export const selectIsDownloadClick = createSelector(
  [selectAbout],
  (about) => about.isDownloadClick
);

//timeline
export const selectCareerPath = createSelector(
  [selectAllAbout],
  (about) => about.careerPath
);
export const selectIsYear2016Click = createSelector(
  [selectAbout],
  (about) => about.isYear2016Click
);
export const selectIsYear2017Click = createSelector(
  [selectAbout],
  (about) => about.isYear2017Click
);
export const selectIsYear2018Click = createSelector(
  [selectAbout],
  (about) => about.isYear2018Click
);
export const selectIsYear2019Click = createSelector(
  [selectAbout],
  (about) => about.isYear2019Click
);
export const selectIsYearCurrentClick = createSelector(
  [selectAbout],
  (about) => about.isYearCurrentClick
);

// layout

export const selectRockWaveImage = createSelector(
  [selectAllOther],
  (other) => other.layout.items.rockWave
);

export const selectLowWaveImage = createSelector(
  [selectAllOther],
  (other) => other.layout.items.lowWave
);
