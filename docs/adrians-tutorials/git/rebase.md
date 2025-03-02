---
title: Git Rebase – Practical Guide
sidebar_label: Git Rebase
tags:
  - Docusaurus
  - Git
  - Rebase
description: Guide on how to using git rebase with examples and mermaid diagrams.
---

## What is `git rebase`?
`git rebase` allows rewriting commit history, eliminating unnecessary merge commits and creating a clean, linear history.

## Examples

### 1. Rebase feature-branch onto main
`git rebase main` on feature-branch:

<div class="row">
  <div class="col col--6">
    **Before rebase:**
    ```mermaid
    flowchart TD
      A["Commit A"]
      B["Commit B"]
      C["Commit C (main)"]
      D["Commit D (feature)"]
      E["Commit E (feature)"]
      F["Commit F (feature)"]
      A --> B
      B --> C
      C --> D
      D --> E
      E --> F
      class A,B,C main;
      class D,E,F feature;
      classDef main color:#3b3b3b,fill:#C6E5FF,stroke:#333,stroke-width:1px;
      classDef feature color:#3b3b3b,fill:#FFEEAD,stroke:#333,stroke-width:1px;
    ```
  </div>
  <div class="col col--6">
    **After rebase:**  
    ```mermaid
    flowchart TD
      A["Commit A"]
      B["Commit B"]
      C["Commit C (main)"]
      Dp["Commit D (rebased)"]
      Ep["Commit E (rebased)"]
      Fp["Commit F (rebased)"]
      A --> B
      B --> C
      C --> Dp
      Dp --> Ep
      Ep --> Fp
      class A,B,C main;
      class Dp,Ep,Fp feature;
      classDef main color:#3b3b3b,fill:#C6E5FF,stroke:#333,stroke-width:1px;
      classDef feature color:#3b3b3b,fill:#FFEEAD,stroke:#333,stroke-width:1px;
    ```
  </div>
</div>

### 2. Interactive rebase (squashing commits)
`git rebase -i` with squashing:

<div class="row">
  <div class="col col--6">
    **Before rebase:**
    ```mermaid
    flowchart TD
      A["Commit A"]
      B["Commit B"]
      C["Commit C (main)"]
      D["Commit D (feature)"]
      E["Commit E (feature)"]
      F["Commit F (feature)"]
      A --> B
      B --> C
      C --> D
      D --> E
      E --> F
      class A,B,C main;
      class D,E,F feature;
      classDef main color:#3b3b3b,fill:#C6E5FF,stroke:#333,stroke-width:1px;
      classDef feature color:#3b3b3b,fill:#FFEEAD,stroke:#333,stroke-width:1px;
    ```
  </div>
  <div class="col col--6">
    **After rebase:**  
    ```mermaid
    flowchart TD
      A["Commit A"]
      B["Commit B"]
      C["Commit C (main)"]
      S["Squashed Commit (feature)"]
      A --> B
      B --> C
      C --> S
      class A,B,C main;
      class S feature;
      classDef main color:#3b3b3b,fill:#C6E5FF,stroke:#333,stroke-width:1px;
      classDef feature color:#3b3b3b,fill:#FFEEAD,stroke:#333,stroke-width:1px;
    ```
  </div>
</div>

### 3. Rebase --onto (changing branch base)
`git rebase --onto new-base old-base feature-branch`:

<div class="row">
  <div class="col col--6">
    **Before rebase:**
    ```mermaid
    flowchart TD
      A["Commit A"]
      B["Commit B (old-base)"]
      C["Commit C"]
      D["Commit D (feature)"]
      E["Commit E (feature)"]
      F["Commit F (feature)"]
      X["Commit X (new-base)"]
      Y["Commit Y"]
      A --> B
      B --> C
      B --- D
      D --> E
      E --> F
      C --> X
      X --> Y
      class A,B,C,X,Y main;
      class D,E,F feature;
      classDef main color:#3b3b3b,fill:#C6E5FF,stroke:#333,stroke-width:1px;
      classDef feature color:#3b3b3b,fill:#FFEEAD,stroke:#333,stroke-width:1px;
    ```
  </div>
  <div class="col col--6">
    **After rebase:**  
    ```mermaid
    flowchart TD
      A["Commit A"]
      B["Commit B (old-base)"]
      C["Commit C"]
      X["Commit X (new-base)"]
      Y["Commit Y"]
      Dp["Commit D (rebased)"]
      Ep["Commit E (rebased)"]
      Fp["Commit F (rebased)"]
      A --> B
      B --> C
      C --> X
      X --> Y
      Y --> Dp
      Dp --> Ep
      Ep --> Fp
      class A,B,C,X,Y main;
      class Dp,Ep,Fp feature;
      classDef main color:#3b3b3b,fill:#C6E5FF,stroke:#333,stroke-width:1px;
      classDef feature color:#3b3b3b,fill:#FFEEAD,stroke:#333,stroke-width:1px;
    ```
  </div>
</div>

### 4. Git pull --rebase (updating local branch)
`git pull --rebase origin main`:

<div class="row">
  <div class="col col--6">
    **Before `git pull --rebase`:**
    ```mermaid
    flowchart TD
      A["Commit A"]
      B["Commit B"]
      C["Commit C (origin/main)"]
      D["Commit D (local)"]
      X["Commit X (local)"]
      Y["Commit Y (local)"]
      A --> B
      B --> C
      C --> D
      D --> X
      X --> Y
      class A,B,C main;
      class D,X,Y feature;
      classDef main color:#3b3b3b,fill:#C6E5FF,stroke:#333,stroke-width:1px;
      classDef feature color:#3b3b3b,fill:#FFEEAD,stroke:#333,stroke-width:1px;
    ```
  </div>
  <div class="col col--6">
    **After rebase:**  
    ```mermaid
    flowchart TD
      A["Commit A"]
      B["Commit B"]
      C["Commit C (origin/main)"]
      Xp["Commit X (rebased)"]
      Yp["Commit Y (rebased)"]
      A --> B
      B --> C
      C --> Xp
      Xp --> Yp
      class A,B,C main;
      class Xp,Yp feature;
      classDef main color:#3b3b3b,fill:#C6E5FF,stroke:#333,stroke-width:1px;
      classDef feature color:#3b3b3b,fill:#FFEEAD,stroke:#333,stroke-width:1px;
    ```
  </div>
</div>


---

## Summary

### When to use `git rebase`?

|   |                                                                      |
|---|----------------------------------------------------------------------|
| ✅ | **Before merging into `main`** - to avoid unnecessary merge commits. |
| ✅ | **Before code review**, to clean up commits (`git rebase -i`).       |
| ✅ | **To rebase a branch onto a different base** (`git rebase --onto`).  |    
| ✅ | **During `git pull`**, to avoid merge commits (`git pull --rebase`). |


### When **not to use** `git rebase`?  
|   |                                                                                                        |
|---|--------------------------------------------------------------------------------------------------------|
| ❌ | **On a shared branch** – it rewrites commit history, which can cause conflicts.                        |    
| ❌ | **If commits were already pushed** – requires `git push --force`, which may overwrite others' changes. |    

---

### Conclusion
`git rebase` helps keep history clean but should be used carefully. Use it when you want to avoid unnecessary merge commits and maintain a tidy repository.
