# Profiles overview

In the profiles overview, the first page that appears once you open the demo,
you can see all the profiles that were defined in the main configuration of that Planner instance.

## Reorder the profiles

If you long-press left-click on a profile, you will be able to drag the profile around
allowing you to reorder basing on your preferences. Changes will be saved in the local storage.

## Edit a profile

You can right-click on a profile to show a context menu that allows you to
make changes to the profile like editing or removing it. Changes are stored locally using the IndexedDB API.

## Remove a profile
Keep in mind that you can't really remove profiles defined in the main configuration
since they are hard-coded and they will reappear once you refresh the page in your browser.

You should install Planner and change the main `config.json` to remove those profiles.