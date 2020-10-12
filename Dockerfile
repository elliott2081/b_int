FROM python:3.6-buster
WORKDIR .
COPY . .
RUN pip install -r requirements.txt
CMD ["bash", "start.sh"]