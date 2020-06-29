# react-mali-thai-bistro

## How to edit/update `react-mali-thai-bistro` and deploy to `https://www.malithaibistro.com/`

1. Make changes in `react-mali-thai-bistro`
2. Commit to Github repository for versioning reference at[react-mali-thai-bistro](https://github.com/keenwilson/react-mali-thai-bistro)

   ```shell
   git push
   ```

3. Run `yarn build`
4. Copy what's in the `build/` folder of `react-mali-thai-bistro`
5. Switch to `malithaibistro/malithaibistro.github.io` folder, empty the repository, and commit `Clean directory` to malithaibistro/ github.
6. Paste the files copied from `react-mali-thai-bistro/build/`
7. Create `CNAME` file with one line of content
   `www.malithaibistro.com`
8. Push to `malithaibistro/malithaibistro.github.io`
9. The `https://www.malithaibistro.com/` should be updated immediately.
