# km-software-manager

This skill automates feature development, build verification, and deployment for the `km-technologies` Nuxt.js project.

## Workflow

1. **Analyze Request**: Receive and clarify requirements.
2. **Feature Branching**: Create branch `km-software-<random-string>` in `/root/km-technologies/`.
3. **Development**: Implement changes using Claude Code.
4. **Build/Verify**: Run `npm run build` in `/root/km-technologies/`.
5. **Dev Server Preview**: Expose the app via Nginx at `https://dev.example.com`.
6. **Notify**: Inform user via chat to review.
7. **Approval**: Wait for "APPROVED".
8. **Pull Request**: Create PR using GitHub CLI.
9. **Deployment**: Merge PR upon "YES".
10. **Confirm**: Deployment success message.

## Configuration

- **Project Path**: `/root/km-technologies/`
- **Branch Prefix**: `km-software-`
