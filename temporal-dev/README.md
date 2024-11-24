# Setup

1. Download the Temporal binary to this folder:

   - [Download Temporal CLI for Linux amd64](https://temporal.download/cli/archive/latest?platform=linux&arch=amd64)
   - [Download Temporal CLI for Linux arm64](https://temporal.download/cli/archive/latest?platform=linux&arch=arm64)

2. Build the Docker container:

   ```bash
   docker build -t temporal-dev .
   ```

3. Run the Docker container:

   ```bash
   docker run --rm  -p 7233:7233 -p 8233:8233 temporal-dev
   ```
