# Based on ys theme by Yad Smood
# Customizations: removed time, SVN, HG; removed "git" label from branch display

# VCS
YS_VCS_PROMPT_PREFIX1=" %{$reset_color%}on%{$fg[blue]%} "
YS_VCS_PROMPT_PREFIX2=":%{$fg_bold[white]%}"
YS_VCS_PROMPT_SUFFIX="%{$reset_color%}"
YS_VCS_PROMPT_DIRTY=" %{$fg[red]%}x"
YS_VCS_PROMPT_CLEAN=" %{$fg[green]%}o"

# Ahead/behind remote
function git_prompt_ahead_behind() {
  local ahead behind
  ahead=$(git rev-list --count @{u}..HEAD 2>/dev/null) || return
  behind=$(git rev-list --count HEAD..@{u} 2>/dev/null) || return
  if (( ahead > 0 )); then echo -n " %{$fg[yellow]%}↑${ahead}%{$reset_color%}"; fi
  if (( behind > 0 )); then echo -n " %{$fg[yellow]%}↓${behind}%{$reset_color%}"; fi
}

# Git info (no "git" label)
local git_info='$(git_prompt_info)$(git_prompt_ahead_behind)'
ZSH_THEME_GIT_PROMPT_PREFIX="${YS_VCS_PROMPT_PREFIX1}${YS_VCS_PROMPT_PREFIX2}"
ZSH_THEME_GIT_PROMPT_SUFFIX="$YS_VCS_PROMPT_SUFFIX"
ZSH_THEME_GIT_PROMPT_DIRTY="$YS_VCS_PROMPT_DIRTY"
ZSH_THEME_GIT_PROMPT_CLEAN="$YS_VCS_PROMPT_CLEAN"

# Virtualenv
local venv_info='$(virtenv_prompt)'
YS_THEME_VIRTUALENV_PROMPT_PREFIX=" %{$fg[green]%}"
YS_THEME_VIRTUALENV_PROMPT_SUFFIX=" %{$reset_color%}%"
virtenv_prompt() {
	[[ -n "${VIRTUAL_ENV:-}" ]] || return
	echo "${YS_THEME_VIRTUALENV_PROMPT_PREFIX}${VIRTUAL_ENV:t}${YS_THEME_VIRTUALENV_PROMPT_SUFFIX}"
}

local exit_code="%(?,,C:%{$fg[red]%}%?%{$reset_color%})"

PROMPT="
%{$fg_bold[magenta]%}[devcontainer]%{$reset_color%} \
%{$terminfo[bold]$fg[blue]%}#%{$reset_color%} \
%(#,%{$bg[yellow]%}%{$fg[black]%}%n%{$reset_color%},%{$fg[cyan]%}%n) \
%{$reset_color%}in \
%{$terminfo[bold]$fg[yellow]%}%~%{$reset_color%}\
${git_info}\
${venv_info}\
 $exit_code
%{$terminfo[bold]$fg[red]%}$ %{$reset_color%}"
