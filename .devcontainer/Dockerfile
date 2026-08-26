# keep in sync with .nvmrc
FROM node:24.19.0-bookworm

ARG PNPM_VERSION=11.24.0

RUN apt-get update && apt-get install -y --no-install-recommends \
      git \
      curl \
      ca-certificates \
      less \
      ripgrep \
      unzip \
      jq \
      sudo \
      zsh \
    && rm -rf /var/lib/apt/lists/* \
    && echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node \
    && chmod 0440 /etc/sudoers.d/node

# GitHub CLI
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg \
      -o /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" \
      > /etc/apt/sources.list.d/github-cli.list \
    && apt-get update && apt-get install -y --no-install-recommends gh \
    && rm -rf /var/lib/apt/lists/*

# AWS CLI v2
RUN ARCH="$(uname -m)" \
    && curl -fsSL "https://awscli.amazonaws.com/awscli-exe-linux-${ARCH}.zip" -o /tmp/awscli.zip \
    && unzip -q /tmp/awscli.zip -d /tmp \
    && /tmp/aws/install \
    && rm -rf /tmp/awscli.zip /tmp/aws

# claude is installed to a volume by post-create.sh, not baked in
RUN npm install -g pnpm@${PNPM_VERSION} \
    && npm cache clean --force

RUN mkdir -p /workspace /home/node/.local/share/pnpm/store /home/node/.claude \
      /home/node/.config/gh /home/node/.npm-global \
    && chown -R node:node /workspace /home/node

# login shells reset PATH, so set it here too
RUN printf '%s\n' \
      'export PNPM_HOME=/home/node/.local/share/pnpm' \
      'export NPM_CONFIG_PREFIX=/home/node/.npm-global' \
      'export PATH=/home/node/.npm-global/bin:$PNPM_HOME:$PATH' \
      > /etc/profile.d/10-devcontainer-path.sh \
    && chmod 0644 /etc/profile.d/10-devcontainer-path.sh

RUN npm config set allow-scripts=@anthropic-ai/claude-code --location=global

USER node

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended >/dev/null
COPY --chown=node:node ys-custom.zsh-theme /home/node/.oh-my-zsh/custom/themes/ys-custom.zsh-theme
COPY --chown=node:node zshrc /home/node/.zshrc
RUN git config --global --add safe.directory /workspace

ENV PNPM_HOME=/home/node/.local/share/pnpm
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PNPM_HOME:$PATH
WORKDIR /workspace
