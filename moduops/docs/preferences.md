---
id: preferences
title: Preferences
sidebar_label: Preferences
---

# Preferences

Preferences are settings for ModuOps itself rather than for a single layout. They're saved on your computer, not in the layout file, so they apply to every layout you open. Open them by clicking `Preferences` under **Settings** in the sidebar.

Changes take effect right away. There's no Save button.

:::info[Screenshot needed]
The Preferences screen showing the Appearance, Default Length & Scale, and Updates cards.
:::

## Appearance

Choose how ModuOps looks:

- `Light`
- `Dark`
- `System` (the default) follows your computer's light or dark setting. The screen tells you which one is in use, for example `Currently using dark mode based on your system settings.`

## Default Length & Scale

The default unit and scale for new layouts and for version 5 layouts you migrate.

| Field | Description |
|---|---|
| `Length Unit` | `Feet` (the default), `Centimeters`, `Meters`, or `Units (dimensionless)`. |
| `Scale` | The default scale. `HO (1:87.1)` to start with. Hidden when the unit is `Units (dimensionless)`. |
| `Custom Ratio` | Appears when you choose `Custom...` as the scale. |

Choosing `Centimeters`, `Meters`, or `Units (dimensionless)` sets the default scale to 1:1.

These are only defaults. Changing them doesn't change or convert any existing layout. To change the unit or scale of a layout that's already open, use the [Layout](layout.md) screen.

:::note
When you migrate a version 5 layout, the unit and scale you pick in the `Set Length Unit & Scale` step also become your new defaults here. See [Upgrading from Version 5](upgrading.md).
:::

## Updates

ModuOps can download and install new versions for you on Mac and Windows. Automatic updates are not available on Linux (in progress). This card shows the version you're running.

| Setting | Description |
|---|---|
| `Check for updates automatically` | On by default. ModuOps checks shortly after it starts and then every few hours. |
| `Receive beta updates (early access)` | Off by default on regular releases. Turn it on to get early-access versions before they're released to everyone. Changing this setting checks for updates right away. |
| `Check now` | Checks for an update immediately. |

A status line under the settings shows what's happening, for example `Checking for updates…`, `Downloading… 45%`, `Up to date (6.0.1).`, or `Update 6.0.2 ready — restart to install.`

### How updates are installed

1. When an update is found, it downloads in the background while you keep working.
2. When the download finishes, a notice appears in the bottom-right corner: `Update <version> ready to install`.
3. Click `Restart now` to install it immediately, or `Later` to keep working. If you choose `Later`, the update installs the next time you quit ModuOps.

:::note
Turning off `Receive beta updates (early access)` doesn't take you back to an older version. You'll stay on the beta you have until a newer regular release comes out.
:::

## Changes from version 5

- Preferences have moved from the `Edit` menu (Windows) or the application menu (Mac) to the sidebar, under **Settings**.
- **New:** light, dark, and system themes.
- **New:** a default length unit and scale for new layouts.
- **New:** automatic updates on Mac and Windows, with an optional beta channel.
