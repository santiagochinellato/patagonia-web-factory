# Staging Area - Lovable Imports

This directory is for **temporary** components copied directly from Lovable.

## Rules:

- ✅ Paste raw JSX/Tailwind from Lovable here
- ✅ Experiment freely
- ❌ **DO NOT** import from staging in production apps
- ❌ **DO NOT** export staging components in `index.ts`

## Workflow:

1. Create your component in Lovable
2. Paste it here as `<component-name>-raw.tsx`
3. Test locally
4. Refactor to atomic design in `libs/shared/ui-kit/src/lib/`
5. Delete the staging file

See `/docs/LOVABLE_WORKFLOW.md` for details.
