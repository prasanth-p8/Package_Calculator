# Copilot instructions for this repository

This file guides AI coding agents (Copilot, code assistants) to be immediately productive in this repository.

Summary
- This repository currently contains no source files or CI configuration. Update this file with project-specific commands and examples when you add code.

How to get oriented (first steps)
1. Read `README.md` and any `.github/workflows/*.yml` if present — CI workflows often show the exact test/build commands the maintainers expect.
2. Determine the primary language and toolchain by looking for these files (in order of priority):
   - Node.js: `package.json` (commands in `scripts`), `.nvmrc` or `engines` field
   - Python: `pyproject.toml`, `requirements.txt`, `setup.cfg`, `setup.py`
   - .NET: `*.csproj` files
   - Java: `pom.xml` or `build.gradle`
3. If none of the above exist, report back in the PR/issue: "Repository has no source files or instructions—please add a README with quick start and test commands."

Actionable rules for making PRs
- If you add language/tooling files, add a short `README.md` section with the exact commands to run tests, lint, build, and start the app (examples below).
- Keep changes small and focused; mention related issue numbers in the PR title when applicable.
- Provide a short smoke-test snippet in the PR description that shows how to run the main functionality locally.

Concrete examples to include here (add relevant ones when the project has code)
- Node example:
  - Install: `npm ci`
  - Test: `npm test` (or `npm run test:unit` if present)
  - Lint: `npm run lint`
  - Build: `npm run build`
- Python example:
  - Create venv: `python -m venv .venv; .\.venv\Scripts\Activate.ps1`
  - Install: `pip install -r requirements.txt` or `pip install .`
  - Test: `pytest -q`
  - Lint: `ruff .` or `flake8` / `mypy` (if configured)

What to look for in the code (pattern hints for agents)
- Entrypoints: look for `src/`, `app/`, or `main.*` files. The CLI or `__main__` typically reveals run-time behavior.
- Tests: `tests/` or `spec/` folders indicate unit/integration test structure and conventions.
- Configuration: `pyproject.toml`, `setup.cfg`, `.eslintrc.*`, or `.prettierrc` show linting and formatting rules.
- CI: `.github/workflows/*.yml` shows the exact commands that must succeed in CI — mirror them locally when possible.

Merging guidance (for assistant contributions)
- If this file already exists, merge new entries into the appropriate section and keep the file concise (aim for ~20–50 lines).
- Prefer explicit command examples over generalities.

If repository is empty (current state)
- Leave this file as a template and open an issue requesting a minimal README and test command. Example issue text:
  "Repo is empty — please add a short README with language, install steps, test command, and CI examples so code assistants can run and validate changes locally."

Contact for clarifications
- If any required information is missing, open an issue referencing this file and add a brief checklist of missing items (language, test command, CI config).

---

Update this guidance with repository-specific commands once the project contains source files or CI configuration. Be explicit: list exact commands and sample invocation lines for the most important dev workflows.